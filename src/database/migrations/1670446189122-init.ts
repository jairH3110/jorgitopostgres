import {MigrationInterface, QueryRunner} from "typeorm";

export class init1670446189122 implements MigrationInterface {
    name = 'init1670446189122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "distribuidor" ("idistribuidor" SERIAL NOT NULL, "nombrecomercial" character varying NOT NULL, "direccion" character varying NOT NULL, "telefono" character varying NOT NULL, "ciudad" character varying NOT NULL, "nombrecontacto" character varying NOT NULL, CONSTRAINT "PK_74da52b308ab091a9175924cb5c" PRIMARY KEY ("idistribuidor"))`);
        await queryRunner.query(`CREATE TABLE "auto" ("idauto" SERIAL NOT NULL, "placas" character varying NOT NULL, "marcha" character varying NOT NULL, "modelo" character varying NOT NULL, "color" character varying NOT NULL, "fecha" character varying NOT NULL, "rentad" integer NOT NULL, "fkdistribuidorIdistribuidor" integer, CONSTRAINT "REL_52644552badb4dad097c09c8a7" UNIQUE ("fkdistribuidorIdistribuidor"), CONSTRAINT "PK_e09314f12bd8e45621d3180605c" PRIMARY KEY ("idauto"))`);
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "direccion" character varying NOT NULL, "telefono" character varying(10) NOT NULL, "correo" character varying(40) NOT NULL, CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "control" ("idcontrol" SERIAL NOT NULL, "folio" character varying NOT NULL, "placas" character varying NOT NULL, "fechasalida" character varying NOT NULL, "fechaentrada" character varying NOT NULL, "nombrecliente" character varying NOT NULL, "telefono" character varying NOT NULL, "correo" character varying NOT NULL, CONSTRAINT "PK_9bc66b58897d27d510b3deb246c" PRIMARY KEY ("idcontrol"))`);
        await queryRunner.query(`ALTER TABLE "auto" ADD CONSTRAINT "FK_52644552badb4dad097c09c8a7d" FOREIGN KEY ("fkdistribuidorIdistribuidor") REFERENCES "distribuidor"("idistribuidor") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "auto" DROP CONSTRAINT "FK_52644552badb4dad097c09c8a7d"`);
        await queryRunner.query(`DROP TABLE "control"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
        await queryRunner.query(`DROP TABLE "auto"`);
        await queryRunner.query(`DROP TABLE "distribuidor"`);
    }

}
