
const node =  (value = null, nextNode = null) => {
    return {
        value,
        nextNode
    }
} 

const linkedList = () => { 
    let linkedListHead = null

    const append = (value) => {
        const newNode = node(value)
        if (linkedListHead === null) {
            linkedListHead = newNode
            return
        }
        let pointer = linkedListHead
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
        }
        pointer.nextNode = newNode  
    }

    const prepend = (value) => {
        const newNode = node(value)
        if (linkedListHead === null) {
            linkedListHead = newNode
            return
        }
        newNode.nextNode = linkedListHead
        linkedListHead = newNode
    }

    const size = () => {
        if (linkedListHead === null) return 0
        let size = 1

        let pointer = linkedListHead
        while (pointer.nextNode !== null){
            size++
            pointer = pointer.nextNode
        }
        return size
    }

    const head = () => {
        return linkedListHead
    }

    const tail = () => {
        if (linkedListHead === null) return linkedListHead

        let pointer = linkedListHead
        while (pointer.nextNode !== null) {
            pointer = pointer.nextNode
        }
        return pointer
    }

    const toString = () => {
        let pointer = linkedListHead
        let s = ''
        while (pointer !== null){
            s += `( ${pointer.value} ) -> `
            pointer = pointer.nextNode
        }
        return `${s} null`
    }

    const at = (index) => {
        let currentIndex = 0

        let pointer = linkedListHead
        
        while (currentIndex < index) {
            if (pointer.nextNode == null) return null
            pointer = pointer.nextNode
            currentIndex++
        }
        return pointer 
    }

    const pop = () => {
        if (linkedListHead === null) return
        if (linkedListHead.nextNode === null) {
            linkedListHead = null
            return
        }
        let pointer = linkedListHead
        
        while (pointer.nextNode.nextNode !== null) {
            pointer = pointer.nextNode
        }
        pointer.nextNode = null
    }

    const contains = (value) => {
        if (linkedListHead === null) return false
        
        let pointer = linkedListHead

        while(pointer.nextNode !== null){
            if (pointer.value === value) return true
            pointer = pointer.nextNode
        }

        //checking last node
        if (pointer.value === value) return true

        return false
    }

    const find = (value) => {
        if (linkedListHead === null) return null

        let index = 0
        let pointer = linkedListHead

        while (pointer.nextNode !== null) {
            if (pointer.value === value) return index
            pointer = pointer.nextNode
            index++
        }
        // checking last node
        if (pointer.value === value) return index

        return null
    }

    const insertAt = (value, index) => {
        if (index < 0) return
        if (index === 0) prepend(value)

        const prevNode = at(index - 1)
        if (prevNode.nextNode === null) return // index out of bound
        
        const newNode = node(value, prevNode.nextNode)
        prevNode.nextNode = newNode
    }

    const removeAt = (index) => {
        if (index < 0) return
        if (index === 0) linkedListHead = linkedListHead.nextNode

        const prevNode = at(index - 1)
        if (prevNode.nextNode === null) return
        prevNode.nextNode = prevNode.nextNode.nextNode
    }

    return {
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt
    }

}


// Tests
const myLinkedList = linkedList()

console.log('******************* append 15, 24, 3 *******************')
myLinkedList.append(15)
myLinkedList.append(24)
myLinkedList.append(3)
console.log(myLinkedList.toString())
console.log(`Current size: ${myLinkedList.size()}`)
console.log('****************')

console.log('******************* prepend 42, 10, -5 *******************')
myLinkedList.append(42)
myLinkedList.append(10)
myLinkedList.append(-5)
console.log(myLinkedList.toString())
console.log(`Current size: ${myLinkedList.size()}`)
console.log('****************************************************************')

console.log('******************* head (displaying value) *******************')
console.log(myLinkedList.head().value)
console.log('****************************************************************')

console.log('******************* tail (displaying value) *******************')
console.log(myLinkedList.tail().value)
console.log('****************************************************************')

console.log('******************* at(3) (displaying value) *******************')
console.log(myLinkedList.at(3).value)
console.log('****************************************************************')

console.log('************************* pop *******************************')
myLinkedList.pop()
console.log(myLinkedList.toString())
console.log(`Current size: ${myLinkedList.size()}`)
console.log('****************************************************************')

console.log('******************* contains(42) & contains(31) *******************')
console.log(`42 in linked list? ${myLinkedList.contains(42)}`)
console.log(`31 in linked list? ${myLinkedList.contains(31)}`)
console.log('****************************************************************')

console.log('******************* find(42) & find(31) *******************')
console.log(`index of 42: ${myLinkedList.find(42)}`)
console.log(`index of 31: ${myLinkedList.find(31)}`)
console.log('****************************************************************')

console.log('******************* insertAt(9000, 3) *******************')
myLinkedList.insertAt(9000, 3)
console.log(`Current size: ${myLinkedList.size()}`)
console.log(myLinkedList.toString())
console.log('****************************************************************')

console.log('******************* removeAt(5) *******************')
myLinkedList.removeAt(5)
console.log(`Current size: ${myLinkedList.size()}`)
console.log(myLinkedList.toString())
console.log('****************************************************************')