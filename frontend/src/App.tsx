import React, { useState } from 'react'

const apiBase = 'http://localhost:3001';

type Tab = 'create' | 'update' | 'delete';

export default function App() {
  const [tab, setTab] = useState<Tab>('create');

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'system-ui, Arial' }}>
      <h1>Listing Service UI</h1>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={() => setTab('create')} disabled={tab==='create'}>Create</button>
        <button onClick={() => setTab('update')} disabled={tab==='update'}>Update</button>
        <button onClick={() => setTab('delete')} disabled={tab==='delete'}>Delete</button>
      </nav>
      {tab === 'create' && <CreateTab />}
      {tab === 'update' && <UpdateTab />}
      {tab === 'delete' && <DeleteTab />}
      <p style={{marginTop: 32, fontSize: 12, opacity: 0.7}}>Backend: {apiBase}</p>
    </div>
  )
}

function CreateTab() {
  const [creating, setCreating] = useState(false);
  const [newId, setNewId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function createListing() {
    setCreating(true); setError(null); setNewId(null);
    try {
      console.log('About to hit create. Res: ')
      const res = await fetch(`${apiBase}/listings`, { method: 'POST' });
      
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setNewId(data.id);
    } catch (e: any) {
      setError(e.message || 'Error');
    } finally {
      setCreating(false);
    }
  }

  return (
    <div>
      <h2>Create Listing</h2>
      <button onClick={createListing} disabled={creating}>
        {creating ? 'Creating...' : 'Create'}
      </button>
      {newId && <p>New Listing ID: <code>{newId}</code></p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
    </div>
  )
}

function UpdateTab() {
  const [id, setId] = useState('');
  const [active, setActive] = useState<string>('');
  const [onHold, setOnHold] = useState<string>('');
  const [result, setResult] = useState<string>('');

  function parseBool(v: string): boolean | undefined {
    if (v === '') return undefined;
    if (v.toLowerCase() === 'true') return true;
    if (v.toLowerCase() === 'false') return false;
    return undefined;
  }

  async function submit() {
    setResult('');
    if (!id) {
      setResult('Unique ID is required.');
      return;
    }
    const body: any = {};
    const a = parseBool(active);
    const o = parseBool(onHold);
    if (typeof a === 'boolean') body.active = a;
    if (typeof o === 'boolean') body.onHold = o;

    try {
      const res = await fetch(`${apiBase}/listings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const dataText = await res.text();
      if (!res.ok) throw new Error(dataText || 'Request failed');
      setResult(dataText);
    } catch (e: any) {
      setResult(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Update Listing</h2>
      <div style={{display:'grid', gap: 8, maxWidth: 480}}>
        <label>
          Unique ID (required)
          <input value={id} onChange={e=>setId(e.target.value)} placeholder="UUID" />
        </label>
        <label>
          active (optional, true/false)
          <input value={active} onChange={e=>setActive(e.target.value)} placeholder="true or false" />
        </label>
        <label>
          onHold (optional, true/false)
          <input value={onHold} onChange={e=>setOnHold(e.target.value)} placeholder="true or false" />
        </label>
        <button onClick={submit}>Update</button>
      </div>
      {result && <pre style={{background:'#f3f3f3', padding:8, marginTop:8}}>{result}</pre>}
    </div>
  )
}

function DeleteTab() {
  const [id, setId] = useState('');
  const [result, setResult] = useState<string>('');

  async function remove() {
    setResult('');
    if (!id) { setResult('Unique ID is required.'); return; }
    try {
      const res = await fetch(`${apiBase}/listings/${id}`, { method: 'DELETE' });
      const dataText = await res.text();
      if (!res.ok) throw new Error(dataText || 'Request failed');
      setResult(dataText);
    } catch (e: any) {
      setResult(`Error: ${e.message}`);
    }
  }

  return (
    <div>
      <h2>Delete Listing</h2>
      <label>
        Unique ID
        <input value={id} onChange={e=>setId(e.target.value)} placeholder="UUID" />
      </label>
      <div>
        <button onClick={remove}>Delete</button>
      </div>
      {result && <pre style={{background:'#f3f3f3', padding:8, marginTop:8}}>{result}</pre>}
    </div>
  )
}