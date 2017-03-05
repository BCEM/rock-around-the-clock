import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-clock-render-component',
  templateUrl: './clock-render.component.html',
  styleUrls: ['./clock-render.component.css']
})
export class ClockRenderComponent implements OnInit {

  @ViewChild('canvas')
  private canvas: ElementRef;

  private ctx;
  private radius: number;
  private time: Date;

  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.radius = this.getRadius();
  }

  @Input()
  public drawClock(h: number, m: number, s: number) {
    this.time.setHours(h, m, s);
    this.drawClockInternal();
  }

  private drawClockInternal() {
    this.drawFace(this.ctx, this.radius);
    this.drawNumbers(this.ctx, this.radius);
    this.drawTime(this.ctx, this.radius);
  }

  private getRadius(): number {
    let radius = this.canvas.nativeElement.height / 2;
    this.ctx.translate(radius, radius);
    radius = radius * 0.90;
    return radius;
  }

  private drawFace(ctx: any, radius: number) {
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = radius * 0.005;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = 'gray';
    ctx.fill();
  }

  private drawNumbers(ctx: any, radius: number) {
    let ang;
    let num;
    ctx.font = radius * 0.15 + 'px courier';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  private drawTime(ctx: any, radius: number) {
    let hour = this.time.getHours();
    let minute = this.time.getMinutes();
    let second = this.time.getSeconds();

    hour = hour % 12;
    hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
    this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);

    second = (second * Math.PI / 30);
    this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  private drawHand(ctx: any, pos: number, length: number, width: number) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }
}
