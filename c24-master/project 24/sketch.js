// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as const Engine = Matter.Engine
*/
var engine,world
var ground1,canon1;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1000,1000);
    engine=Engine.create();
    world=engine.world;
ground1=new Ground(500,999,1000,0);
canon1=new Canon(50,460,80,80);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background("white");
ground1.display();
canon1.display();

//drawSprites();

}


function keyReleased() {
    // Call the shoot method for the cannon.
}