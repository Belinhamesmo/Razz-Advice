// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function getStaticProps() {
  const advice = fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())

     return {
       props: {
         advice_url: advice.advice_url,
         
       }
     }
}
export default hello;
