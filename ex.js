const mass = document.querySelector('.inp1')
const planet = document.querySelector('.inp2')
const calc = document.querySelector('.calc')
const world = document.querySelector('.world')
const waste = document.querySelector('.mass')
const pl = {
    mercury:3.7,
    venus:8.87,
    earth:9.81,
    mars:3.17,
    jupiter:24.79,
    uranus:8.69,
    saturn:10.44,
    neptune:11.15,
    moon:1.62
}
const link = {
    mercury:'mercury.png',
    venus: 'venus.png',
    earth:'earth.png',
    mars:'mars.png',
    jupiter:'jupiter.png',
    uranus:'uranus.png',
    saturn:'saturn.png',
    neptune:'neptune.png',
    moon:'moon.png'
}
calc.addEventListener('click',()=>{
    const m = Number(mass.value)
    let s = false
    const p = planet.value.toLowerCase().trim()
            if(isNaN(m) || mass.value === ''){
                mass.value = ''
                mass.value = ' nah twin'
                mass.style.color = 'red'
                s = true
            }
            if(!pl[p]){
                planet.value = ''
                planet.value = 'nah twin'
                planet.style.color = 'red'
                s = true
            }
            if(s) return
            world.style.height = '500px'
            waste.remove()
            const png = document.createElement('img')
            const ansholder = document.createElement('div')
            const smth = document.createElement('div')
            const ans = document.createElement('div')
            const name = document.createElement('div')
            const line = document.createElement('div')
            let soln = Math.round(pl[p] * m)
            smth.innerText = `the weight of object in`
            ansholder.style.backgroundColor = 'rgba(44, 36, 119, 0.6)'
            ansholder.style.padding = '30px 60px'
            ansholder.style.marginLeft = '30px'
            ansholder.style.display = 'flex'
            ansholder.style.flexDirection = 'column'
            ansholder.style.alignItems = 'center'
            ansholder.style.gap = '6px'
            png.src = link[p]
            png.style.width = '350px'
            smth.style.color = 'white'
            smth.style.fontSize = '20px'
            name.innerText = planet.value
            name.style.fontSize = '24px'
            name.style.fontWeight = 'bold'
            name.style.color = 'white'
            ans.innerText = `${soln} N`
            ans.style.fontSize = '24px'
            ans.style.fontWeight = 'bold'
            ans.style.color = 'white'
            ans.style.padding = '40px'
            ans.style.borderRadius = '100px'
            ans.style.backgroundColor = 'rgba(47, 33, 171, 0.7)'
            line.style.display = 'flex'
            line.style.flexDirection = 'row'
            line.style.gap = '4px'
            world.innerHTML = ''
            world.appendChild(png)
            world.appendChild(ansholder)
            ansholder.appendChild(line)
            line.appendChild(smth)
            line.appendChild(name)
            ansholder.appendChild(ans)
})        
mass.addEventListener('input',() =>{
    mass.style.color = ''
})
planet.addEventListener('input',() =>{
    planet.style.color = ''
})
