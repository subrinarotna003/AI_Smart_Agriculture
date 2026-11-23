import { ScanSearch, Sprout, ChartNoAxesCombined } from 'lucide-react'

export const serviceSegments = [
  {
    id: 'disease-detection', number: '01', title: 'Disease Detection (Plants)', shortTitle: 'Disease Detection',
    icon: ScanSearch, eyebrow: 'Understand plant health',
    description: 'Upload a clear leaf photograph to identify diseases in selected plants.',
    input: 'Leaf image · Plant type', output: 'Disease class and confidence score',
    crops: ['Potato', 'Tomato'],
    options: ['Upload a leaf photograph', 'Review supported plants', 'View prediction history'],
    detail: 'Start with potato or tomato leaves. The planned image classifier returns a disease class and confidence percentage. Low-confidence results will request a clearer photo.',
  },
  {
    id: 'crop-prediction', number: '02', title: 'Crop Prediction', shortTitle: 'Crop Prediction',
    icon: Sprout, eyebrow: 'Choose what to grow',
    description: 'Find suitable crops using your soil nutrients and local weather conditions.',
    input: 'N, P, K · pH · Temperature · Humidity · Rainfall', output: 'Recommended crops and confidence',
    options: ['Enter soil and weather values', 'Review required measurements', 'View prediction history'],
    detail: 'Crop prediction is the crop recommendation task in the proposal. A classifier combines seven soil and weather measurements to recommend suitable crops.',
    fields: [
      ['nitrogen', 'Nitrogen (N)', 'mg/kg', 0, 1000],
      ['phosphorus', 'Phosphorus (P)', 'mg/kg', 0, 1000],
      ['potassium', 'Potassium (K)', 'mg/kg', 0, 1000],
      ['ph', 'Soil pH', '0–14', 0, 14],
      ['temperature', 'Temperature', '°C', -20, 60],
      ['humidity', 'Relative humidity', '%', 0, 100],
      ['rainfall', 'Rainfall', 'mm for the dataset period', 0, 10000],
    ],
  },
  {
    id: 'yield-prediction', number: '03', title: 'Yield Prediction', shortTitle: 'Yield Prediction',
    icon: ChartNoAxesCombined, eyebrow: 'Plan your harvest',
    description: 'Estimate expected harvest using crop, land area, season, and historical data.',
    input: 'Crop · Area · Season · Historical yield · Weather', output: 'Estimated yield and error indicator',
    crops: ['Rice', 'Potato', 'Tomato'],
    options: ['Enter harvest and seasonal data', 'Review yield inputs', 'View prediction history'],
    detail: 'A regression model will estimate harvest from historical production and seasonal conditions. Its result will include an error indicator derived from model evaluation.',
    fields: [
      ['area', 'Cultivated area', 'hectares', 0.01, 100000],
      ['historicalYield', 'Previous comparable yield', 'tonnes/hectare', 0, 1000],
      ['temperature', 'Seasonal average temperature', '°C', -20, 60],
      ['rainfall', 'Seasonal rainfall', 'mm', 0, 10000],
    ],
  },
]
