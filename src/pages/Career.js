import React from 'react';
import Layout from './../components/Layout';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, } from '@mui/material';
import { Link } from "react-router-dom";
import '../styles/Career.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import Applyjobs from '../pages/Applyjobs';

const Career = () => {
  return (
    <Layout>
      <div className="box"> 
        <h1> Career Opportunities </h1>

        <TableContainer component={Paper} sx={{ overflowX: 'auto', maxWidth: '100%' }} className="four">
      <Table aria-label='simple table' stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: '#625b4b', fontSize: '18px', fontWeight: '800', borderBottom: '3px solid #625b4b' }}>Role</TableCell>
            <TableCell style={{ color: '#625b4b', fontSize: '18px', fontWeight: '800', borderBottom: '3px solid #625b4b' }}>Description</TableCell>
            <TableCell style={{ color: '#625b4b', fontSize: '18px', fontWeight: '800', borderBottom: '3px solid #625b4b' }}>Location</TableCell>
            <TableCell align='center' style={{ color: '#625b4b', fontSize: '18px', fontWeight: '800', borderBottom: '3px solid #625b4b' }}>Apply</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Link to="/applyjobs" style={{ color: '#cda45e', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                  {row.job_title}
                </Link>
              </TableCell>
              <TableCell >
                <Link to="/applyjobs" style={{ color: '#000', fontSize: '15px', fontWeight: '600', wordWrap: 'break-word' }}></Link>
                {row.description}</TableCell>
              <TableCell style={{ color: '#000', fontSize: '15px', fontWeight: '600' }}>{row.location}</TableCell>
              <TableCell align='center'>
                <Link to="/applyjobs" style={{ color: '#cda45e', fontSize: '15px', fontWeight: '600', textDecoration: 'none' }}>
                  {row.apply}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      
        

      
      
        <div className="arrow">
             <Link to="/events"><ArrowCircleLeftIcon style={{ color: '#cda45e', fontSize: '2.7rem'}} /></Link>
             <Link to="/gallery"><ArrowCircleRightIcon style={{ color: '#cda45e', fontSize: '2.7rem'}} /></Link>
        </div>

      </div>
    </Layout>
  )
}

const tableData = [
  {
    job_title: 'Software Engineer',
    description: 'We are seeking for a skilled software engineer ...',
    location: 'Deido, Douala',
    apply: 'Apply Now !',
  },
  {
    job_title: 'Front-End Developer',
    description: 'We are seeking for a fron-end developer...',
    location: 'Deido, Douala',
    apply: 'Apply Now !',
  },
  {
    job_title: 'UX Designer',
    description: 'We are looking for a talented UX designer...',
    location: 'Deido, Douala',
    apply: 'Apply Now !',
  }
]

export default Career;
