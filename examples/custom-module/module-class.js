class MyClass 
{
    constructor(title)
    {
        this.title = title
    }

    getInfo()
    {
        console.log(`Hey this is custom class, named as ${this.title} class`)
        return
    }
}

module.exports = MyClass

