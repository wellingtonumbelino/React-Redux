import React from "react";

import { DataTable } from 'primereact/datatable'
import { Column } from "primereact/column";
import { Button } from 'primereact/button';

import products from "../data/products";

export default function Products() {
  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  }

  const imageBodyTemplate = (rowData) => {
    return <img src={`../assets/images/bamboo-watch.jpg`} alt="Teste" />;
    // return <img src={`assets/images/${rowData.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />;
  }

  const actionsTable = (
    <div className="actions">
      <Button icon="pi pi-plus" label="Add Cart" />
    </div>
  )

  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <DataTable value={products}>
          <Column field="id" header="Id" />
          <Column field="name" header="Name" />
          <Column header="Image" body={imageBodyTemplate} />
          <Column field="price" header="Price" body={priceBodyTemplate} />
          <Column body={actionsTable} />
        </DataTable>
      </div>
    </>
  )
}