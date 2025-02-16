import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { ColorPicker, Switch } from 'antd'
import { useContext } from 'react'
import { AppContext } from 'App'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Trường dữ liệu cần phải lớn hơn 2 kí tự!')
    .max(50, 'Trường dữ liệu không được vượt quá 50 kí tự!')
    .required('Bạn cần nhập đầy đủ thông tin của trường này'),
  lastName: Yup.string()
    .min(2, 'Trường dữ liệu cần phải lớn hơn 2 kí tự!')
    .max(50, 'Trường dữ liệu không được vượt quá 50 kí tự!')
    .required('Bạn cần nhập đầy đủ thông tin của trường này'),
  email: Yup.string().email('Invalid email').required('Bạn cần nhập đầy đủ thông tin của trường này'),
  number: Yup.string()
    .matches(/^[a-z]+$/, 'số điện thoại không hợp lệ')
    .required('Trường dữ liệu này không được để trống')
})
export default function About() {
  const data = useContext(AppContext)

  console.log(data.modeDemo)

  const handleSubmit = async (values: any) => {
    await new Promise((r) => setTimeout(r, 500))
    alert(JSON.stringify(values, null, 2))
  }
  // cách 1 dùng JSX
  // cách 2 là dùng hook useFormik()

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={() => {}}
        >
          {({ errors, touched }) => {
            return (
              <Form className='flex flex-col'>
                <label htmlFor='firstName'>First Name:</label>
                <Field
                  id='firstName'
                  name='firstName'
                  placeholder='Jane'
                  className='rounded-[5px] border-[1px] border-[gray] p-2'
                />
                {errors.firstName && touched.firstName ? <div className='text-[red]'>{errors.firstName}</div> : null}

                <label htmlFor='lastName'>Last Name:</label>
                <Field
                  id='lastName'
                  name='lastName'
                  placeholder='Doe'
                  className='rounded-[5px] border-[1px] border-[gray] p-2'
                />
                {errors.lastName && touched.lastName ? <div className='text-[red]'>{errors.lastName}</div> : null}

                <label htmlFor='email'>Email:</label>
                <Field
                  id='email'
                  name='email'
                  placeholder='jane@acme.com'
                  type='email'
                  className='rounded-[5px] border-[1px] border-[gray] p-2'
                />
                {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}

                <Field name='colors' as='select' className='my-select'>
                  <option value='red'>Red</option>
                  <option value='green'>Green</option>
                  <option value='blue'>Blue</option>
                </Field>
                <button
                  type='submit'
                  className='mr-2 mb-2 mt-[20px] inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300'
                >
                  Submit
                </button>
              </Form>
            )
          }}
        </Formik>
      </div>
      <Switch
        defaultChecked
        onChange={(checked) => {
          data.setModeDemo(checked ? 'light' : 'dark')
        }}
      />
      <br />

      <div>{data.modeDemo}</div>
    </>
  )
}
