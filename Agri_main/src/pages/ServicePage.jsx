import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Upload, Info } from 'lucide-react'
import AppShell from '@/layout/AppShell'
import { Container } from '@/components/Container'
import { Button } from '@/components/ui/button'
import { serviceSegments } from '@/data/serviceSegments'
import '@/styles/services.css'

export default function ServicePage({ segmentId }) {
  const segment = serviceSegments.find(item => item.id === segmentId)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const formRef = useRef(null)
  const Icon = segment.icon
  useEffect(() => {
    if (!file) { setPreview(''); return }
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])
  function selectFile(event) {
    const selected = event.target.files?.[0]
    setError(''); setStatus(''); setFile(null)
    if (!selected) return
    if (!['image/jpeg', 'image/png'].includes(selected.type) || selected.size > 5 * 1024 * 1024) {
      setError('Choose a JPG or PNG image no larger than 5 MB.'); event.target.value = ''; return
    }
    setFile(selected)
  }
  function submit(event) {
    event.preventDefault()
    if (segment.id === 'disease-detection' && !file) { setError('Upload a leaf photograph to continue.'); return }
    setStatus('Your inputs are valid. Predictions are not available yet because the backend and trained AI service have not been connected. No prediction has been generated or saved.')
  }
  return (
    <AppShell><><Container className="service-container">
      <Link className="back-link" to="/app"><ArrowLeft size={17} /> Back to dashboard</Link>
      <header className="service-header"><span className="service-icon"><Icon size={30} /></span><span className="section-kicker">SERVICE {segment.number} / {segment.eyebrow}</span><h1>{segment.title}</h1><p>{segment.description}</p></header>
      <section aria-label="Service options" className="service-options">{segment.options.map((option, i) => i === 2 ? <Link key={option} to="/app/history">{option}<ArrowRight size={18} /></Link> : <a key={option} href={i === 0 ? '#service-form' : '#service-details'}>{option}<ArrowRight size={18} /></a>)}</section>
      <div className="service-content-grid">
        <section className="service-panel" id="service-form"><span className="section-kicker">PROVIDE YOUR INPUTS</span><h2>{segment.id === 'disease-detection' ? 'Upload a leaf image' : segment.id === 'crop-prediction' ? 'Soil & weather measurements' : 'Harvest & seasonal information'}</h2><p className="form-description">All fields are required. Use measurements from the same farm and period.</p>
          <form ref={formRef} onSubmit={submit} onChange={() => setStatus('')}>
            {segment.crops && <label className="service-field">{segment.id === 'disease-detection' ? 'Plant type' : 'Crop'}<select name="crop" required defaultValue=""><option value="" disabled>Select a crop</option>{segment.crops.map(crop => <option key={crop}>{crop}</option>)}</select></label>}
            {segment.id === 'disease-detection' && <div className="leaf-upload"><Upload size={30} /><label className="service-field">Choose a clear leaf photograph<input name="leaf" type="file" accept="image/jpeg,image/png" required onChange={selectFile} /></label><p>JPG or PNG · Maximum 5 MB · One leaf in focus</p>{preview && <img src={preview} alt="Selected leaf preview" />}{file && <span>{file.name}</span>}</div>}
            {segment.id === 'yield-prediction' && <label className="service-field">Season<select name="season" required defaultValue=""><option value="" disabled>Select a season</option>{['Kharif-1', 'Kharif-2', 'Rabi'].map(season => <option key={season}>{season}</option>)}</select></label>}
            <div className="measurement-grid">{segment.fields?.map(([name, label, unit, min, max]) => <label className="service-field" key={name}>{label}<span className="field-unit">{unit}</span><input type="number" name={name} min={min} max={max} step="any" required placeholder="Enter value" /></label>)}</div>
            {error && <p className="form-error" role="alert">{error}</p>}
            <Button type="submit" className="w-full">Check inputs <ArrowRight size={17} /></Button>
            {status && <p className="service-status" role="status">{status}</p>}
          </form>
        </section>
        <aside className="service-aside" id="service-details"><section className="service-panel"><span className="section-kicker">HOW THIS SERVICE WORKS</span><h2>From input to insight</h2><p>{segment.detail}</p><h3>Required inputs</h3><p>{segment.input}</p><h3>Planned result</h3><p>{segment.output}</p></section><section className="service-info"><Info size={22} /><div><h3>Development preview</h3><p>These forms prepare the documented inputs. Trained models, confidence scores, and saved results require the Laravel backend and Python AI service.</p><Link to="/project-summary">Read the project summary <ArrowRight size={16} /></Link></div></section></aside>
      </div>
    </Container></></AppShell>
  )
}
