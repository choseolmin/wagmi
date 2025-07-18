import React, { useState } from "react";
import { useSendTransaction, useAccount } from "wagmi";
import { parseEther } from "viem";

const DEV_ADDRESS = "0x957dA24Af0Bc4CB3Fc6b66f72Ec5b4B4A96F7f38";

const Tipping = () => {
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState(""); // 🔥 해시 저장용 상태 추가
  const { sendTransactionAsync, isPending, isError, error } = useSendTransaction();
  const { address, connector, chainId, status } = useAccount();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) return;
    try {
      const tx = await sendTransactionAsync({
        to: DEV_ADDRESS,
        value: parseEther(amount),
        account: address,
        chainId,
        connector,
      });
      setTxHash(tx.hash); // 🔥 트랜잭션 해시 저장
    } catch (err) {
      console.error('트랜잭션 에러:', err);
    }
  };

  const notConnected = status !== 'connected';

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>개발자에게 후원하기</h2>
      {notConnected && <div style={{ color: '#f66', marginBottom: 12 }}>지갑이 연결되어 있지 않습니다.</div>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input
          type="number"
          min="0"
          step="0.0001"
          placeholder="후원할 KAIA 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
          required
          disabled={notConnected}
        />
        <button type="submit" disabled={isPending || !amount || notConnected} className="button">
          {isPending ? "전송 중..." : "KAIA 팁 보내기"}
        </button>
      </form>
      {txHash && (
        <div style={{ color: "green", marginTop: 8, wordBreak: "break-all" }}>
          트랜잭션 해시: {txHash}
        </div>
      )}
      {isError && (
        <div style={{ color: "red", marginTop: 8 }}>
          에러: {error?.shortMessage || error?.message}
        </div>
      )}
    </div>
  );
};

export default Tipping;
