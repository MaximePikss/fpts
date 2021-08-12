
interface Personne{}
const getChild = (b: Personne): Personne | null => null

const getGrandChildren = (a: Personne): Personne | null => {
    const son = getChild(a)
    return (son == null) ? null : getChild(son)
    
}

export {getGrandChildren}
