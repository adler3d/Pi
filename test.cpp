//qap_text_draw_at_x_center(qDev,vec2d(0,200),"pi = "+FToS(get_pi2()*0.5e6),16);
static real get_pi2(int iters=16)
{
  auto a=vec2d(1,0);
  auto b=vec2d(0,1);
  auto n=4;
  for(int i=0;i<iters;i++){
    b=(a-b).Norm();
    n<<=1;
  }
  return (b-a).Mag()*n;
}
