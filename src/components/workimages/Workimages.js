import React from 'react';
import a from "../../assets/works/a.jpg";
import b from "../../assets/works/b.jpg";
import c from "../../assets/works/c.jpg";
import d from "../../assets/works/d.jpg";
import e from "../../assets/works/e.jpg";
import f from "../../assets/works/f.jpg";
import g from "../../assets/works/g.jpg";
import h from "../../assets/works/h.jpg";
import i from "../../assets/works/i.jpg";
import j from "../../assets/works/j.jpg";
import k from "../../assets/works/k.jpg";
import l from "../../assets/works/l.jpg";
import m from "../../assets/works/m.jpg";
import n from "../../assets/works/n.jpg";
import o from "../../assets/works/o.jpg";
import p from "../../assets/works/p.jpg";
import q from "../../assets/works/q.jpg";
import r from "../../assets/works/r.jpg";
import s from "../../assets/works/s.jpg";
import u from "../../assets/works/u.jpg";
import v from "../../assets/works/v.jpg";
import w from "../../assets/works/w.jpg";
import x from "../../assets/works/x.jpg";
import y from "../../assets/works/y.jpg";
import z from "../../assets/works/z.jpg";
import aa from "../../assets/works/aa.jpg";
import bb from "../../assets/works/bb.jpg";
import cc from "../../assets/works/cc.jpg";
import dd from "../../assets/works/dd.jpg";
import ee from "../../assets/works/ee.jpg";
import ff from "../../assets/works/ff.jpg";
import gg from "../../assets/works/gg.jpg";
import hh from "../../assets/works/hh.jpg";
import ii from "../../assets/works/ii.jpg";
import "./Workimages.css"

// Put them in an array
const images = [
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, u, v, w, x, y, z,
  aa, bb, cc, dd, ee, ff, gg, hh, ii
];

const Workimages = () => {
  return (
    <div className="images-container">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`work-${index}`}
        className="work-image"
      />
    ))}
  </div>
  );
};

export default Workimages;
