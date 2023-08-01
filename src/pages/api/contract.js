import axios from 'axios';

export default async function handler(request, response) {

  try {
    
    const inputs = [{"input": {"function": "save", "username": "anon", "data": request.body.data }}];
    const functionId = "jBA874p2FtnLhDONzcphPgOp9Nzf5ly620BWQWf9rUI"

    const req = await axios.post('https://api.mem.tech/api/transactions', {
      functionId: functionId,
      inputs: inputs
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    response.status(200).json(req.data)
    return request.body.data;
  
  } catch (error) {

    console.log(error);

  }

}
