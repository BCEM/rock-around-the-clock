namespace Clock_Back.Models
{
    public interface IClockModel
    {
        TimeModel GetTime();
        void Tick();
    }
}