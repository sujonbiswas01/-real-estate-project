import React from 'react'
import { SectionTitle } from '../components/comon/SectionTitle'
import { Container } from '../components/comon/Container'
import ProblemSolutionHeader from '../components/comon/ProblemSolutionHeader'

import { problem } from '../assets/sourse/data'
import { ProblemsolutionCard } from './ProblemsolutionCard'
const Problemcontainer = () => {
  return (
    <section className='pt-32'>
      <Container>
        <ProblemSolutionHeader />
        <div className='pt-10 grid grid-cols-4 place-items-center'>
          {problem.map((problem,index)=>(
            <ProblemsolutionCard {...problem} key={index}/>
          ))}
       
        </div>
      </Container>

    </section>
  )
}

export default Problemcontainer