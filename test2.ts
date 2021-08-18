
interface Personne{}
const getChild = (b: Personne): Personne | null => null

const getGrandChildren = (a: Personne): Personne | null => {
    const child = getChild(a)
    return (child == null) ? null : getChild(child)
    
}

export {getGrandChildren}
