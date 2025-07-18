import { useAccount, useBalance } from 'wagmi'
import { kairosChain } from '../kairosChain'

export default function Profile() {
  const { address } = useAccount()
  const { data: balanceData, isLoading } = useBalance({
    address,
    chainId: kairosChain.id, // 1001
  })

  // 🔥 여기서 찍으면 됨
  console.log('현재 address:', address)
  console.log('현재 balanceData:', balanceData)

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>내 지갑 주소</h2>
      <div style={{ wordBreak: 'break-all', marginBottom: 16, color: '#555', fontSize: 16 }}>
        {address ?? '지갑이 연결되어 있지 않습니다.'}
      </div>
      <h3 style={{ marginBottom: 8 }}>현재 잔액</h3>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#222' }}>
        {isLoading
          ? '잔액 조회 중...'
          : address
          ? `${balanceData?.value ? (Number(balanceData.value) / 1e18).toFixed(4) : '0.0000'} KAIA`
          : '-'}
      </div>
    </div>
  )
}
