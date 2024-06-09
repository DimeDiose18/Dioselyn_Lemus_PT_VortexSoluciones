import React from "react"

type ButtonProps = {text: string}

const ButtonCustom: React.FC<ButtonProps> = ({text}): JSX.Element => {
  return (
    
    <button
                   
                    className="flex w-[100%] text-[0.8rem] justify-center rounded-md bg-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {text}
                  </button>
  )
}

export { ButtonCustom }
