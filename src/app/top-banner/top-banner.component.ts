import { OnChanges, Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/switchMap';
import { Iball } from '../iball';



@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})


export class TopBannerComponent implements OnInit {
  balls: Iball[] = [];


  // a reference to the canvas element from our template
    @ViewChild('myCanvas') public canvas: ElementRef;
    TAU = 2 * Math.PI;
    lastTime = Date.now();
    // setting a width and height for the canvas
    @Input() public width = 400;
    @Input() public height = 400;

    private ctx: CanvasRenderingContext2D;
    private canvasEl: HTMLCanvasElement;


    public ngOnInit() {
      // get the context
      this.canvasEl = this.canvas.nativeElement;
      this.ctx = this.canvasEl.getContext('2d');

      // set the width and height
      this.canvasEl.width = window.innerWidth;
      this.canvasEl.height = window.innerHeight;

      // set some default properties about the line
      this.ctx.lineWidth = 3;
      this.ctx.lineCap = 'round';
      this.ctx.strokeStyle = '#000';

      for (let i = 0; i < this.canvasEl.width * this.canvasEl.height / (65 * 65); i++) {
        const ball: Iball = {
          _x : Math.random() * this.canvasEl.width || Math.random() * this.canvasEl.width,
          _y : Math.random() * this.canvasEl.height || Math.random() * this.canvasEl.height,
          _vel : {
            x: Math.random() * 2 - 1,
            y: Math.random() * 2 - 1
          },
          _update : function(canvas) {
            if (this._x > canvas.width + 50 || this._x < -50) {
              this._vel.x = -this._vel.x;
            }
            if (this._y > canvas.height + 50 || this._y < -50) {
              this._vel.y = -this._vel.y;
            }
            this._x += this._vel.x;
            this._y += this._vel.y;
          },
          _draw : function(ctx, can?) {
            ctx.beginPath();
            ctx.globalAlpha = .4;
            ctx.fillStyle = '#448fda';
            const x = Math.abs( (0.5 + this._x) % can.width) ;
            const y = Math.abs ((0.5 + this._y) % can.height);

            ctx.arc(x, y , 100, 0, this.TAU, false);
            ctx.fill();
            //console.log("( " + x + ", " + y + ")");
          }
      };

        this.balls.push(ball);
      }
      this.loop();
  }



  update() {
    const diff = Date.now() - this.lastTime;
      for (let frame = 0; frame * 16.6667 < diff; frame++) {
        for (let index = 0; index < this.balls.length; index++) {
          this.balls[index]._update(this.canvasEl);
      }
    }
    this.lastTime = Date.now();
  }

  draw() {
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = '#001c33';
    this.ctx.fillRect(0, 0 , this.canvasEl.width, this.canvasEl.height);
  for (let index = 0; index < this.balls.length; index++) {
    const ball = this.balls[index];
    ball._draw(this.ctx, this.canvasEl);
    this.ctx.beginPath();
    for (let index2 = this.balls.length - 1; index2 > index; index2 += -1) {
      const ball2 = this.balls[index2];
      const dist = Math.hypot(ball._x - ball2._x, ball._y - ball2._y);
        if (dist < 100) {
          this.ctx.strokeStyle = '#448fda';
          this.ctx.globalAlpha = 1 - (dist > 100 ? .8 : dist / 150);
          this.ctx.lineWidth = 1;
          this.ctx.moveTo((0.5 + ball._x) || 0, (0.5 + ball._y) || 0);
          this.ctx.lineTo((0.5 + ball2._x) || 0, (0.5 + ball2._y) || 0);
        }
    }
    this.ctx.stroke();
  }
}//
 loop() {
  this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
  this.update();
  this.draw();
  requestAnimationFrame( () => this.loop());
}

}// end


