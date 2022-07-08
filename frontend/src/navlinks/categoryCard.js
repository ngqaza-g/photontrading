import  React from 'react'

const categoryCard = ({data}) => {
    return(
        <div className="row ">
                {data.map((data)=>
                <div className="categoriesdiv col-sm-6 col-md-6 col-lg-2 my-3 center">
                <a className="catlinks " href={data.Url}><div className=" CategoryCard  row" key={data.id}>
              
            <div className="card bg-dark  text-white  "id="categoryCard03" >
              <img src={data.image} className=" flex d-flex flex-column flex-wrap" id="categoryimg04" alt="categories"/>
              <div className="card-img-overlay overlay">
                <h5 className="card-title CategoryCardTitle text-center">{data.name}</h5>
              
              </div>
            </div>
          </div>
          </a></div>)}
        
          </div>
        
            );
               
}

export default categoryCard

