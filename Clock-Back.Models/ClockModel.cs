using System;

namespace Clock_Back.Models
{
    // ReSharper disable once ClassNeverInstantiated.Global : used implicitly
    public class ClockModel : IClockModel
    {
        private int _h;
        private int _m;
        private int _s;

        public ClockModel()
        {
            var t = DateTime.Now;
            _h = t.Hour;
            _m = t.Minute;
            _s = t.Second;
        }

        public TimeModel GetTime() => new TimeModel { Hours = _h, Mins = _m, Sec = _s };

        public void Tick() => TikS();

        private void TikS()
        {
            _s++;
            if (_s <= 59) return;
            _s = 0;
            TickM();
        }

        private void TickM()
        {
            _m++;
            if (_m <= 59) return;
            _m = 0;
            TickH();
        }

        private void TickH()
        {
            _h++;
            if (_h > 11)
                _h = 0;
        }
    }
}
