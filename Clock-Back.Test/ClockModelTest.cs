using System;
using Clock_Back.Models;
using NUnit.Framework;
using Assert = NUnit.Framework.Assert;

namespace Clock_Back.Test
{
    [TestFixture]
    internal sealed class ClockModelTest
    {
        private const int SecondInDay = 86400;

        /// <summary>
        /// 12H (analog) clocks should show correct time twice a day
        /// </summary>
        [Test]
        public void ClockModel_CorrectTime_Test()
        {
            var clocks = new ClockModel();
            var ct = DateTime.Now;
            var overlaps = 0;
            for (var i = 0; i < SecondInDay; i++)
            {
                var t = clocks.GetTime();
                if (t.Hours == ct.Hour % 12 && t.Mins == ct.Minute && t.Sec == ct.Second)
                    overlaps++;

                clocks.Tick();
            }

            Assert.AreEqual(2, overlaps);
        }

        /// <summary>
        /// 12H (analog) Even a broken clock is right twice a day
        /// </summary>
        [Test]
        public void ClockModel_BrokenTime_Test()
        {
            var clocks = new BrokenClockModel();
            var ct = DateTime.Now;
            var overlaps = 0;
            for (var i = 0; i < SecondInDay; i++)
            {

                var t = clocks.GetTime();
                if (t.Hours == ct.Hour % 12 && t.Mins == ct.Minute && t.Sec == ct.Second)
                    overlaps++;

                clocks.Tick();
            }

            Assert.AreEqual(2, overlaps);
        }
    }
}
