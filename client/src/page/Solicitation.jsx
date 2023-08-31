import React from 'react'
import Layout from './../Layout/Layout'
import Title from '../components/title/Title';
import avatar from './../assets/avatar.png';
import './solicitation.css';

function Solicitation(){
  let mock = [1,2,3,4,5];
  return(
    <Layout>
        <Title title='Solicitação'/>
     <div className='container'>
      <table> 
        <tr>
          <th>Produto</th>
          <th>Tipo de Pagamento</th>
          <th>Re-vendedor</th>
          <th>Quantidade</th>
          <th>Config</th>
        </tr>
    {  
   mock.map(()=>{
           return( 
           <tr className='hover'>
                <td>Alfredo Manuel</td>
                <td>948576070</td>
                <td>Bloqueado</td>
                <td>2</td>
                <td>
                  <button className='btn-success'>Aceitar</button>
                  <button className='btn-danger'>Rejeitar</button>
                </td>
            </tr>
            )
   })
            
       }
        
      </table>
     </div>
    </Layout>
  ) 
}
export default Solicitation;