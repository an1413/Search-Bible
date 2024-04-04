import React, { useCallback, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function useAuthContext() {
  // useContext를 통해 전역 context에 접근합니다.
  const context = useContext(AuthContext);

  // 이제 context 안에는 AuthContext에서 반환하는 state 값(user), dispatch함수

  return context
}
