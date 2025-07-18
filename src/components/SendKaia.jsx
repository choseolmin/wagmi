import React, { useState } from "react";
import { useAccount, useSendTransaction } from "wagmi";
import { parseEther } from "viem";

const SendKaia = () => {
  const { address, connector, chainId, status } = useAccount();
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!to || !value) return;
    sendTransaction({
      to,
      value: parseEther(value),
      account: address,
      chainId,
      connector,
    });
  };

  const notConnected = status !== 'connected';

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{marginTop:0}}>KAIA 전송</h2>
      {notConnected && <div style={{ color: '#f66', marginBottom: 12 }}>지갑이 연결되어 있지 않습니다.</div>}
      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <input
          className="input"
          name="address"
          placeholder="받는 지갑 주소 (0x...)"
          value={to}
          onChange={e => setTo(e.target.value)}
          required
          style={{ marginBottom: 8 }}
          disabled={notConnected}
        />
        <input
          className="input"
          name="value"
          placeholder="보낼 KAIA 수량"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
          style={{ marginBottom: 8 }}
          disabled={notConnected}
        />
        <button className="button" disabled={isPending || notConnected} type="submit" style={{ width: '100%' }}>
          {isPending ? '전송 중...' : '전송'}
        </button>
      </form>
      {hash && <div style={{ color: 'green', marginTop: 8, wordBreak: 'break-all' }}>트랜잭션 해시: {hash}</div>}
      {error && (
        <div style={{ color: 'red', marginTop: 8 }}>에러: {error?.shortMessage || error.message}</div>
      )}
    </div>
  );
};

export default SendKaia; 