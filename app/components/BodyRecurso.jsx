import Balancer from 'react-wrap-balancer'

export default function BOdyRecurso ({ content }) {
  const paragraphs = content.split('\n')
  return (
    <div className='font-sans text-base leading-normal my-4'>
      <Balancer>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className='mb-6 text-xl leading-8'>
            {paragraph.trim()}
          </p>
        ))}
      </Balancer>
    </div>
  )
}
