const consult_counter = (partcodes) => {
    return `
    SELECT SUM(b.qtd_item) as total_counter
    FROM fat_nf_mestre a
    JOIN fat_nf_item b
    ON a.empresa = b.empresa
    AND a.trans_nota_fiscal = b.trans_nota_fiscal
    JOIN item c
    ON b.empresa = c.cod_empresa
    AND b.item = c.cod_item
    JOIN item_man d
    ON c.cod_empresa = d.cod_empresa
    AND c.cod_item = d.cod_item
    WHERE a.empresa = '01'
    AND CAST(a.dat_hor_emissao AS DATE) >= '${process.env.INITIALDAY}'
    AND d.cod_etapa = 'G'
    AND c.ies_tip_item = 'F'
    AND b.item IN (${partcodes})`;
}
const setIsolation = `SET ISOLATION TO DIRTY READ;`
const insertPartcode = `INSERT INTO dbinvent_ethosmet.cabinometro_partcodes(partcode) VALUES (?)`
const getPartcode = `select * from dbinvent_ethosmet.cabinometro_partcodes`
const selectOnePartcode = `select * from dbinvent_ethosmet.cabinometro_partcodes where partcode = (?)`
module.exports = { consult_counter, setIsolation, insertPartcode, getPartcode,selectOnePartcode};
