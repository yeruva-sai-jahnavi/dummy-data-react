import { React, useEffect, useState } from "react";

function DisplayTable() {
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                console.log("prods:", data.products);
                const prodsList = data.products;
                setProducts(prodsList);
                // console.log("prods state:", products);
            })
            .catch((err) => console.error(err));
    }, []);
    console.log("out prods state", products);
    return (
        <div>
            <p>Display table</p>
            <table>
                <thead>
                    <TableColumns products={products} />
                </thead>
                <tbody>
                    <TableRows products={products} />
                </tbody>
            </table>
        </div>
    );
}

function TableColumns({ products }) {
    let aProduct = products[0];
    const productKeys = Object.keys(aProduct || {});

    return (
        <tr>
            {productKeys.map((colname) => (
                <th key={colname}>{colname}</th>
            ))}
        </tr>
    );
}

function TableRows({ products }) {
    console.log(products);
    return (
        <tr>
            {
                for (const [key, value] of Object.entries(products)) {
                    console.log(`${key}: ${value}`);
                }
            }
        </tr>
    );
}

function TableData({ product }) {
    const productKeys = Object.keys(product || {});
    const productValues = Object.values(product || {});

    return (
        <>
            {productKeys.map((key) => (
                <td key={key}>{product[key]}</td>
            ))}
        </>
    );
}

export default DisplayTable;
