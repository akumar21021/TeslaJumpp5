let groundFloor;
let player;
let floors;
let score = 0;

function setup() {
  createCanvas(400, 600);
  world.gravity.y = 10;
  groundFloor = new Sprite(0,height -20,width*2,20, 's');
  player = new Sprite(width/2,height - 100,10,10, 'd');
  player.rotationLock = true;

  floors = new Group();

  for(let i =0;  i < 10;i++)
  {
    let f = new floors.Sprite()
    f.w = random(20,100);
    f.h = 20;
    f.collider = 's'
    f.x = random(width)
    f.y = player.y - (i*50)



  }



}

function draw() {
  clear()
  background(0);
  if (kb.pressing('a'))
  {
    player.x  -=1;

  }
  else if (kb.pressing*('d'))
  {
    player.x +=1;

  }
  if(kb.presses('space') && player.colliding(floors) ||kb.presses('space') &&
  player.colliding(groundFloor))
  {
    player.vel.y -=10;

  }
  spawnFloors()


}

function spawnFloors()
{  
  if(player.y < floors[floors.length - 5].y)
  {
    let f = new floors.Sprite()
    f.w = random(20,100);
    f.h = 20;
    f.collider = 's'
    f.x = random(width)
    f.y = player.y - (random(50,100))
  }
   
}
