const Applications = () => {
  console.log("Applications component loaded!")
  
  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        color: '#333',
        fontSize: '2rem',
        marginBottom: '1rem'
      }}>
        Applications
      </h1>
      <p style={{ 
        color: '#666',
        fontSize: '1.1rem'
      }}>
        Voici la page des candidatures
      </p>
    </div>
  )
}

export default Applications