import React, { useState } from 'react';
import { Input, Grid, Label } from 'semantic-ui-react';

export default function ColorPicker() {
  const [hsv, setHSV] = useState({
    h: 0,
    s: 1,
    v: .5
  });
  const [rgb, setRGB] = useState(HSVtoRGB(hsv.h, hsv.s, hsv.v));

  var handleRGB = (e, {name, value}) => {
    setRGB({...rgb, [name]: value})
    setHSV(RGBtoHSV(rgb.r, rgb.g, rgb.b));
  }
  
  var handleHSV = (e, {name, value}) => {
    setHSV({...hsv, [name]: value})
    setRGB(HSVtoRGB(hsv.h, hsv.s, hsv.v));
  }

  var getRGB = () => {
    return `rgb(${rgb.r},${rgb.g},${rgb.b})`
  }
  
  return (
    <Grid style={{width: "90%", margin: "auto"}}>
      <Grid.Row>
      <Grid.Column style={{width: "30%"}}>
              <Label style={{width: "75%", backgroundColor: 'white'}}>H {numString(hsv.h, 2)}</Label>
              <Input style={{width: "100%"}}
                labelPosition="right" 
                type='range'
                step={.01}
                min={0}
                max={1}
                name='h'
                value={hsv.h}
                onChange={handleHSV}
                />
              <Label style={{width: "75%", backgroundColor: 'white'}}>S {numString(hsv.s, 2)}</Label>
              <Input style={{width: "100%"}}
                labelPosition="right" 
                type='range'
                step={.01}
                min={0}
                max={1}
                name='s'
                value={hsv.s}
                onChange={handleHSV}
                />
              <Label style={{width: "75%", backgroundColor: 'white'}}>V {numString(hsv.v, 2)}</Label>
              <Input style={{width: "100%"}}
                labelPosition="right" 
                type='range'
                step={.01}
                min={0}
                max={1}
                name='v'
                value={hsv.v}
                onChange={handleHSV}
                />
      </Grid.Column>
      <Grid.Column style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "30%"}}>
        <div style={{borderRadius: "10px", background: getRGB(), width: "75%", height: "75%"}} />
      </Grid.Column>
      <Grid.Column style={{width: "30%"}}>
        <Label style={{width: "75%", backgroundColor: 'white'}}>R {numString(rgb.r/255, 2)}</Label>
                <Input style={{width: "100%"}}
                  labelPosition="right" 
                  type='range'
                  step={1}
                  min={0}
                  max={255}
                  name='r'
                  value={rgb.r}
                  onChange={handleRGB}
                  />
                <Label style={{width: "75%", backgroundColor: 'white'}}>G {numString(rgb.g/255, 2)}</Label>
                <Input style={{width: "100%"}}
                  labelPosition="right" 
                  type='range'
                  step={1}
                  min={0}
                  max={255}
                  name='g'
                  value={rgb.g}
                  onChange={handleRGB}
                  />
                <Label style={{width: "75%", backgroundColor: 'white'}}>B {numString(rgb.b/255, 2)}</Label>
                <Input style={{width: "100%"}}
                  labelPosition="right" 
                  type='range'
                  step={1}
                  min={0}
                  max={255}
                  name='b'
                  value={rgb.b}
                  onChange={handleRGB}
                  />

      </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

/**
 * Converts an HSV color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The RGB representation
 */
function HSVtoRGB(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    default: break;
  }

  return {r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 *
 * @param   Number  r       The red color value
 * @param   Number  g       The green color value
 * @param   Number  b       The blue color value
 * @return  Array           The HSV representation
 */
function RGBtoHSV(r, g, b) {
  r /= 255; g /= 255; b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;

  var d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: break;
    }

    h /= 6;
  }

  return {h: h.toFixed(2), s: s.toFixed(2), v: v.toFixed(2)};
}

function numString(value, decimalPlaces) {
  return Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces).toFixed(decimalPlaces);
}