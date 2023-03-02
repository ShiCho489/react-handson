const products = [
    { title: 'web development', isSkill: true, id: 1 },
    { title: 'Data Structues and Algorithms', isSkill: false, id: 2},

];

function ListItem (){
const listItems = products.map(product => 
    <li key={product.id}
    style = {{color : product.isSkill ? 'red' : 'purple'
    }}
    >
        {product.title}
    </li>);

    return (
        <ul>{listItems}</ul>
    );
};

    export default ListItem;