get_pi=(iters=16)=>
{
  a=ox=vec2(1,0);
  b=oy=vec2(0,1);
  n=4;
  sqrt=c=>sqrt(c.x*c.x+c.y*c.y);
  norm=c=>c/sqrt(c);
  f=(a,b)=>{
    c=(a+b)>>1;
    c=norm(c);
    return c;
  }
  for(int i=0;i<iters;i++){
    b=f(a,b);
    n<<=1;
  }
  return sqrt(b-a)*n;
}
