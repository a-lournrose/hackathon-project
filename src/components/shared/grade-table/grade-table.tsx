import React, { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table';

interface IGrade {
  title: string;
  values: number[];
}

export interface IGradeTable {
  grades: IGrade[];
}

const GradeTable:FC<IGradeTable> = ({grades}) => {
  return (
    <Table>
      <TableHeader className='bg-primary-500'>
        <TableRow className='bg-white'>
          <TableHead className='text-black'>Тема</TableHead>
          {grades && grades[0].values.map((_, index) => <TableHead
            className='text-black'>{index + 1}</TableHead>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        {grades.map(grade => (
          <TableRow key={grade.title} className='bg-white'>
            <TableCell className='underline cursor-pointer'>{grade.title}</TableCell>
            {grade && grade.values.map(value => <TableCell>{value}%</TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GradeTable;