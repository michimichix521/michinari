class Enemy
{
	constructor(canvas,image,x,y,enlv){
		this.canvas=canvas;
		this.image=new Image();
		this.x=x;
		this.y=y;
		this.enlv=enlv;

		this.readImage(image);
		this.HP = 1;
		this.setActive = true;
		this.rd;
		this.ex;
		this.ey;
	}

	readImage(image)
	{
		this.image.src=image;
	}
	showImage(px, py)
	{
		
		this.canvas.drawImage(this.image,this.x-25,this.y-25,50,50);
	}

	hitJudge(px,py){//敵との当たり判定
		var distance=Math.sqrt((px-this.x)**2+(py-this.y)**2);
		if(distance<50){
			this.HP-=1;
			if(this.HP < 0){
				this.setActive = false;
			}
			
		}
	}
	move(px, py)
	{
		switch(this.enlv){
			case 0:
				this.moveLv0(px,py);
				break;
			case 1:
				this.moveLv1(px,py);
				break;
		}
	}

	moveLv0(px,py)
	{
		if(this.y > py){	//up
			if(this.y-2>=125){
				this.y-=1;
			}
		}
		if(this.y < py){	//down
			if(this.y+2<=375){
				this.y+=1;
			}	
		}
		if(this.x < px){	//right
			if(this.x+2<=675){
				this.x+=1;
			}
		}
		if(this.x > px){	//left
			if(this.x-2>=25){
				this.x-=1;
			}
		}

	}
	moveLv1(px, py){
		this.rd = Math.floor(Math.random() * Math.floor(5));
		switch(this.rd){
			case 0:
				break;
			case 1:	//up
				if(this.y-2>=100){
					this.y-=2;
				}
				break;
			case 2:	//dowm
				if(this.y+2<=350){
					this.y+=2;
				}	
				break;
			case 3:	//right
				if(this.x+2<=650){
					this.x+=2;
				}
				break;
			case 4:	//left
				if(this.x-2>=0){
					this.x-=2;
				}
				break;
		}
	}
}