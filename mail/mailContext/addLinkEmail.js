const addLinkEmail = (name, url) => {

  return 
    ` <center>
    <div style="border: solid gray 3px ; width: 30vw; height: 50vh; border-radius: 25px; margin-top: 23vh ;padding-top: 5vh;box-shadow: 6px 6px 9px gray" >
    <h1 style="color:darkcyan ; font-family: Comic Sans MS">hi,  ${name}</h1>
    <p style="color:lightcoral ; font-family: Comic Sans MS">
    Your link has been successfully added,<br/>
      your tiny link is ${url}.<br/>
      We will be happy to be of service in the future as well<br/>
     TINYURL team.<br/>
    </p>
     <img src="./vector.png" width="200vw" height="200vh"/>
    </div>
    </center>`
}

export default addLinkEmail