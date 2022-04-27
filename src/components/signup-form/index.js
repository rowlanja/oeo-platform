import { useRef, useState, FormEvent } from 'react'

import {
  Box,
  Flex,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { FormLayout } from '@saas-ui/forms'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function SignupForm() {
  const initialRef = useRef<HTMLInputElement>(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = () => {

    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      setError('Invalid email')
      return
    }

    setLoading(true)

    /* @ts-ignore */

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      redirect: 'manual',
      body: encode({
        'form-name': 'early-access',
        name,
        email,
      }),
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          setResult(true)
        }
      })
      .catch((error) => {
        console.error(error)
        /* @ts-ignore */
        window?.woopra.track('Signup Failed')
        setResult(false)
      })
      .finally(() => setLoading(false))
  }

  var content = null
  if (false) {
    content = (
      <Text>
        Awesome 😎 ! Thanks for signing up, we really appreciate your early
        support.
        <br />
        <br /> We'll contact you at  <strong>{email}</strong> soon.
      </Text>
    )
  } else {
    content = (
        <FormLayout>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              onChange={({ target }) => setName(target.value)}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </FormControl>

          <Text
            fontSize="sm"
            color="muted"
          >Everyone hates spam. Only one follow-up email will be sent to notify you when we are launched.</Text>

          <Button
            colorScheme="orange"
            type="submit"
            size="md"
            isLoading={loading}
          >
            Get notified
          </Button>
        </FormLayout>
    )
  }

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      data-netlify="true"
      name="early-access"
    >
      <Box>{content}</Box>
    </Box>
  )
}
