import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import 'fake-indexeddb/auto'

expect.extend(matchers)

afterEach(() => {
  cleanup()
  // IndexedDB를 초기화합니다
  indexedDB.deleteDatabase('TodoDatabase')
})
