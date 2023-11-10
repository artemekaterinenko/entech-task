import wretch from 'wretch'

import { API_URL } from '@/config'

export const API = wretch(API_URL)
