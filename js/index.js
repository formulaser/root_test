function answer() {
    const a = document.getElementById('a')
    const b = document.getElementById('b')
    const c = document.getElementById('c')
    let o = document.getElementById('otvet')

    let av = parseFloat(a.value)
    let bv = parseFloat(b.value)
    let cv = parseFloat(c.value)


    let D = bv**2 - 4 * av * cv
    if (D < 0) {
        av = ""
        bv = ""
        cv = ""
        o.textContent = 'Нет корней'
        document.getElementById('one_root').style.display = 'none'
        document.getElementById('two_root').style.display = 'none'
        document.getElementById('three_root').style.display = 'none'
    }
    else if (D === 0) {
        x = (-bv) / 2 * av
        x = x * 100
        document.getElementById('root').textContent = (Math.round(x) / 100)
        document.getElementById('one_root').style.display = 'block'
        document.getElementById('two_root').style.display = 'none'
        document.getElementById('three_root').style.display = 'none'
        o.textContent = ''
    }
    else if (D > 0) {
        let x1 = (-bv + D**0.5) / 2 * av
        let x2 = (-bv - D**0.5) / 2 * av

        x1 = x1 * 100
        x2 = x2 * 100
    
        document.getElementById('root1').textContent = (Math.round(x1) / 100)
        document.getElementById('root2').textContent = (Math.round(x2) / 100)
        document.getElementById('two_root').style.display = 'block'
        document.getElementById('three_root').style.display = 'block'
        document.getElementById('one_root').style.display = 'none'
        o.textContent = ''
    }
    else {
        o.textContent = 'Неверно набраны значения'
        document.getElementById('one_root').style.display = 'none'
        document.getElementById('two_root').style.display = 'none'
        document.getElementById('three_root').style.display = 'none'
    }
   

}