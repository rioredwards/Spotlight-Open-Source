import React from 'react';
import './Table.css';
import { Table } from 'rsuite';
import 'rsuite-table/dist/css/rsuite-table.css';
import { animalData } from '../../animalData';

const { Column, HeaderCell, Cell } = Table;
const data = animalData;

export default function AnimalTable() {
  return (
    <section>
      <Table height={400} data={data}>
        <Column width={60} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={250}>
          <HeaderCell>Animal Name</HeaderCell>
          <Cell dataKey="animalName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Cool Factor</HeaderCell>
          <Cell dataKey="coolFactor" />
        </Column>
      </Table>
    </section>
  );
}
