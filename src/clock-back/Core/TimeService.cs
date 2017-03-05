using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Clock_Back.Models;

namespace clock_back.Core
{
    internal static class TimeService
    {
        private static readonly Dictionary<Type, IClockModel> ClocksDictionary;
        private static readonly object Lock;

        static TimeService()
        {
            Lock = new object();
            ClocksDictionary = new Dictionary<Type, IClockModel>();
            Task.Run(() => new Timer().Start(Tick, TimeSpan.FromSeconds(1), new CancellationToken()));
        }

        private static void Tick()
        {
            foreach (var clock in ClocksDictionary)
                clock.Value.Tick();
        }

        public static TimeModel GetTime<T>() where T : IClockModel
        {
            lock (Lock)
            {
                var clockType = typeof(T);
                if (ClocksDictionary.ContainsKey(clockType))
                    return ClocksDictionary[clockType].GetTime();

                // Clock of requested type is not yet served by service, so we have to add it
                var newClock = InstantiateNewClock<T>(clockType);
                return newClock.GetTime();
            }
        }

        private static T InstantiateNewClock<T>(Type clockType) where T : IClockModel
        {
            var newClock = Activator.CreateInstance<T>();
            ClocksDictionary.Add(clockType, newClock);
            return newClock;
        }
    }
}
