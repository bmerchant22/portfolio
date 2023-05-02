import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Resume from '../public/assets/projects/cf-rss-poster.png'

const resume = () => {

return(
  <object data={Resume} type='application/pdf' width='100%' height='100%'></object>
)
};

export default resume;
