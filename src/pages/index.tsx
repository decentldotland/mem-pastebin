import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PasteBin() {

    interface PasteData {
        username: string;
        data: string;
    }

    const [input, setInput] = useState<string>("")
    const [success, setSuccess] = useState<boolean>(false)
    const [memState, setMemState] = useState<PasteData[]>([])



    //`submitToApi sends payload to the api folder to avoid CORS issues`
    async function submitToApi() {

        try {

          const req = await axios.post('/api/contract', {
            data: input,
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          return req?.data;
        
        } catch (error) {

          console.log(error);

        }

    }

    //Handle Submission Containing `submitToApi`
    const handleSubmission = async () => {

        if(input.length > 0) {
            const loader = toast.loading('Submitting');
            const result = await submitToApi()
            const memState = result.data.execution.state.logs
            if(
                result.status === "SUCCESS" 
                && 
                memState[memState.length - 1].data === input
            ) {

                toast.dismiss(loader)
                toast.success('Paste Saved!')
                setMemState(memState.reverse())
                setInput("")
                setSuccess(true)

            } else {

                toast.dismiss(loader)
                toast.error("There was an issue. Please try again.")

            }

            console.log("rr: ", result)

        } else {

            toast.error('Please enter input!')
            return false
            
        }

    }

    return (
        <div className="w-screen h-screen bg-black flex justify-center items-center">

            <div className="w-[90%] md:w-[75%] lg:w-[50%] min-h-[200px] flex flex-col justify-start items-center space-y-5">

                <p className="text-white text-5xl font-bold text-center">Paste Your Message</p>

                <div className="h-3 w-[33%] bg-white"></div>

                <textarea 
                    rows={4} 
                    className="block p-2.5 w-full text-sm text-gray-300 bg-black/75 rounded-lg border border-gray-300" 
                    placeholder="Write your thoughts here..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                >
                </textarea>

                <button 
                    type="button" 
                    className="text-white bg-black hover:bg-gray-900 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 "
                    onClick={() => handleSubmission()}
                    >
                        Submit
                </button>

                {success && (
                    <div className="w-full h-[250px] rounded-lg bg-gray-900/25 overflow-y-scroll p-6 font-mono">

                        <p className="text-white text-xl font-bold text-center">Recent Pastes from MEM</p>
                        {memState.map((item, index) => (
                            <p key={index} className="text-white">{item.data}</p>
                        ))}

                    </div>
                )}

            </div>
            
        </div>
    )
}