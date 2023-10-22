import { useState, useEffect } from "react";

function DisplayTable() {
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setColumns(Object.keys(data.products[0]));
                setRecords(data.products);
            })
            .catch((err) => console.error("we got this error: " + err));
    }, []);

    return (
        <div>
            <h1>Dummy data</h1>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {records.map((record, index) => (
                        <ProductData key={index} product={record} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function ProductData({ product }) {
    // product is an Object! to iterate thru obj use Obj.keys
    const productKeys = Object.keys(product);
    return (
        <tr>
            {productKeys.map((key, index) => {
                if (key === "thumbnail") {
                    return (
                        <td key={index} className="thumbnail">
                            <img src={product[key]} />
                        </td>
                    );
                } else if (key === "images") {
                    const imgURLs = product[key];
                    return (
                        <td key={index} className="imgs">
                            {imgURLs.map((url, index) => (
                                <img src={url} key={index} />
                            ))}
                        </td>
                    );
                } else {
                    return <td key={index}>{product[key]}</td>;
                }
            })}
        </tr>
    );
}

export default DisplayTable;
