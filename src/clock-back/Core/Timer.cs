using System;
using System.Threading;
using System.Threading.Tasks;

namespace clock_back.Core
{
    internal sealed class Timer
    {
        public async Task Start(Action action, TimeSpan interval, CancellationToken cancellationToken)
        {
            while (true)
            {
                action();
                var task = Task.Delay(interval, cancellationToken);
                try
                {
                    await task;
                }
                catch (TaskCanceledException)
                {
                    return;
                }
            }
        }
    }
}
