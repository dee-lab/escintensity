import * as Form from '@radix-ui/react-form';
import Button from './button';

export const Input = () => (
<Form.Root>
  <Form.Field name="email" className='flex flex-col gap-2'>
    <Form.Label className='font-semibold'>Be part of the ESC community:</Form.Label>
    <div className="flex flex-col md:flex-row gap-3 items-left md:items-center">
      <Form.Control asChild>
        <input className="shadow border border-solid border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight max-w-96 focus:ring-4 focus:ring-zinc-500" type="email" placeholder='Enter your email' required />
      </Form.Control>
      <Form.Submit asChild>
        <Button>
          <span>Sign up</span>
          <span className="material-symbols-outlined w-6 h-6" fill="currentColor" aria-hidden="true" data-slot="icon" >
            navigate_next
          </span>
        </Button>
      </Form.Submit>        
    </div>
    <Form.Message match="valueMissing" className='text-red-600 italic text-xs pt-1'>
        Please enter your email
    </Form.Message>
    <Form.Message match="typeMismatch" className='text-red-600 italic text-xs pt-1'>
      Please provide a valid email
    </Form.Message>
  </Form.Field>  
</Form.Root>
);