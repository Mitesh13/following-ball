const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth-2
canvas.height = window.innerHeight-6

const c = canvas.getContext('2d')

let mouse = {
    x:undefined,
    y:undefined
}

class Circle
{
    constructor()
    {
        this.x = innerWidth/2
        this.y = innerHeight/2
        this.dx = 0
        this.dy = 0
        this.stepX = 0
        this.stepY = 0
    }

    draw = () =>
    {
        c.beginPath()
        c.arc(this.x,this.y,100,0,Math.PI*2,false)
        c.strokeStyle = 'white'
        c.stroke()
    }

    update()
    {
        this.dx = mouse.x - this.x
        this.dy = mouse.y - this.y
        if(mouse.x)
        {

            if(this.x != mouse.x)
            {
                this.x += this.dx/30
            }
            if(this.y != mouse.y)
            {
                this.y += this.dy/30
            }
        }
        this.draw()
    }
}
const circle = new Circle()
window.addEventListener('mousemove',(e)=>{
    mouse.x = e.x
    mouse.y = e.y
})

function animate()
{
    c.clearRect(0,0,innerWidth,innerHeight)
    circle.update()
    requestAnimationFrame(animate)
}
animate()