using System;

namespace Clock_Back.Models
{
    // ReSharper disable once ClassNeverInstantiated.Global : used implicitly
    public class BrokenClockModel : IClockModel
    {
        private int _h;
        private int _m;
        private int _s;

        public BrokenClockModel()
        {
            var t = DateTime.Now;
            _h = t.Hour;
            _m = t.Minute;
            _s = t.Second;
        }

        public TimeModel GetTime() => new TimeModel { Hours = _h, Mins = _m, Sec = _s };

        public void Tick() => TickS();

        private void TickS()
        {
            _s--;
            if (_s < 0)
            {
                _s = 59;
                TickM();
            }
        }

        private void TickM()
        {
            _m--;
            if (_m < 0)
            {
                _m = 59;
                TickH();
            }
        }

        private void TickH()
        {
            _h--;
            if (_h < 0)
                _h = 11;
        }
    }
}
