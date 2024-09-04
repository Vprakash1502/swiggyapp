const heading = React.createElement("h1", {id:"heading"}, "hello react")
        const root = ReactDOM.createRoot(document.getElementById('root'))
        


        const parent= React.createElement('div',{id:'parent'}, React.createElement('div',{id:'child'},React.createElement('h1',{},'this is insdie of all')))
        root.render(parent)